import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { api } from "../services/api";
import { useEffect } from "react";
import { Layout } from "../partials/Layout";
import { KeyableAny } from "../types/globals";
import { Card } from "../components/Card";
import { Block } from "../partials/Block";
import { Row } from "react-bootstrap";
import { Job } from "../types/job";

export type HomeProps = {
  jobs: {
    jobs: Job[]
    meta: KeyableAny
  };
};

/**
 * Home page listing all jobs
 * @param {HomePops} props 
 * @returns {NextPage}
 */
const Home: NextPage<HomeProps> = ({ jobs }) => {
  return (
    <Layout title="Jobs listing page">
      <Block className="d-flex justify-content-center">
        <Row xs={1} md={2} className="g-4 justify-content-between w-75">
          {jobs.jobs.map((job) => (
            <Card
              key={job.id}
              title={job.title}
              content={`Location: ${job.location.name}`}
              gotoText="See more"
              gotoPage={`/job/${job.id}`}
            />
          ))}
        </Row>
      </Block>
    </Layout>
  );
};

/**
 * @returns {object}
 */
export const getServerSideProps: GetServerSideProps = async () => {
  let error = null,
    res = null;
  try {
    res = await api({
      url: "/boards/unity3d/jobs",
    });
  } catch {
    // Quick & Dirty Error handling
    error = { statusCode: 500, message: "Oops, the server is not happy" };
  }

  return {
    props: {
      jobs: res?.data || null,
      error
    },
  };
};

export default Home;
