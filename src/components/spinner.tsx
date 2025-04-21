import { FC } from 'react';
import { DotLoader } from 'react-spinners';

const Spinner: FC = () => {
    return (
        <div className={`flex justify-center`}>
            <DotLoader color={'#36c2c2'} />
        </div>
    );
};

export default Spinner;
