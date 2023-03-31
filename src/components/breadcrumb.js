import { Breadcrumb } from 'antd';
import { HomeOutlined, TeamOutlined, FormOutlined} from '@ant-design/icons';

const BreadCrumb= () => (
  <Breadcrumb
    items={[
      {
        title: <HomeOutlined />,
      },
      {
        title: <a href="/"><FormOutlined /> Form</a>,
      },
      {
        title: <a href="/list"><TeamOutlined /> ListOfPersons</a>,
      },
    ]}
  />
);
export default BreadCrumb;