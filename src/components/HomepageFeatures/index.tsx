import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cool Links',
    Svg: require('@site/static/img/undraw_cool_links.svg').default,
    description: (
      <>
        Check <Link to="/cool-links">here</Link>
      </>
    ),
  },
  {
    title: 'About me',
    Svg: require('@site/static/img/undraw_travelling.svg').default,
    description: (
      <>
        Dad, Husband, Traveller
      </>
    ),
  },
  {
    title: 'Open Source Projects',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        Check <Link to="/open-source-projects">here</Link>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
