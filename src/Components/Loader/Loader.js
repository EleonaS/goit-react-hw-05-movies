import LoaderSpinner from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

//<LoaderSpinner type="ThreeDots" color="pink" height={100} width={100} timeout={10000} />

const Loader = () => (
  <WrapperLoader>
    <LoaderSpinner
      type="Circles"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={10000}
    />
  </WrapperLoader>
);

export { Loader };
