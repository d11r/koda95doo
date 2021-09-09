import { Meta } from '../layout/Meta';
import { Application } from '../templates/Application';
import { AppConfig } from '../utils/AppConfig';

const Prijava = () => (
  <>
    <Meta
      title={AppConfig.application_title}
      description={AppConfig.application_descripion}
    />
    <Application />
  </>
);

export default Prijava;
