import { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { Block } from "../../partials/Block";
import { Layout } from "../../partials/Layout";
import { api } from "../../services/api";
import { KeyableAny } from "../../types/globals";
import he from "he";
import { Job as JobType } from "../../types/job";

type JobProps = {
  job: JobType;
  error: KeyableAny;
};

/**
 * Single Job entry page
 * @param {JobProps} props
 * @returns {NextPage}
 */
const Job: NextPage<JobProps> = ({ job, error }) => {
  return (
    <Layout title={job.title}>
      <Block>
        <h1 className="mb-5">{job.title}</h1>
        {/* job.content is controlled input - so it's safe to use dangerouslySetInnerHtml */}
        <div dangerouslySetInnerHTML={{ __html: he.decode(job.content) }} />
      </Block>
    </Layout>
  );
};

/**
 * @returns {object}
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  let error = null,
    res = null;
  try {
    res = await api({
      url: `/boards/unity3d/jobs/${context.query.pid}`,
    });
  } catch {
    // Quick & Dirty Error handling
    error = { statusCode: 500, message: "Oops, the server is not happy" };
  }

  return {
    props: {
      job: res?.data || null,
      error,
    },
  };
};

export default Job;
