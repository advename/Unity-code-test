import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Block.module.scss'

/**
 * Block Props interface.
 */
 interface BlockProps extends React.ComponentPropsWithoutRef<'section'> {
  /** Child elements. */
  children: React.ReactNode;
  /**
   * Breakpoints for the fluid prop.
   */
  size?: string;
};

/**
 * Default Block Layout.
 * Using by default lg size: https://getbootstrap.com/docs/5.0/layout/containers/.
 *
 * @param {BlockProps} props
 * @returns {JSX.Element}
 */
export default function Block ({ size, children, ...rest }: BlockProps): JSX.Element {
  return (
      <Container
        fluid={`${size || 'lg'}`}
        as="section"
        {...rest}
      >
        {children}
      </Container>
  )
}
