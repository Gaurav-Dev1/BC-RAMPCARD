import { ReactSVG } from 'react-svg';
import TodaysSpendingGraph from '../../../../public/assets/images/graph.svg';
import { SPENDING_GRAPH_TEST_ID } from '../../../constants/constant';

interface SpendingGraphProps {
    className?: string;
}

const SpendingGraph: React.FC<SpendingGraphProps> = (props) => {
    return <ReactSVG {...props} data-testid={SPENDING_GRAPH_TEST_ID} src={TodaysSpendingGraph} />;
};

export default SpendingGraph;
