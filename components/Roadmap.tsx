import Layout from './Layout';
import RoadmapItem from './RoadmapItem';
import H2 from './H2';
import Content from './Content';
import { roadmap } from '../data';

const Roadmap = () => ((
  <Layout bgColor="#222633" color="#fff">
    <Content>
      <H2 id="roadmap" center>Roadmap</H2>
      <div className="content">
        {
          roadmap.map((props) => (
            <RoadmapItem key={props.time} {...props} />
          ))
        }
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 28px;
        }

        .content {
          max-width: 600px;
        }

        @media only screen and (min-width: 600px) {
          .content {
            font-size: 26px;
            margin-bottom: 80px;
            line-height: 1.40;
            width: 280px;
            margin-top: 30px
          }
        }
      `}</style>
    </Content>
  </Layout>
));

export default Roadmap;
