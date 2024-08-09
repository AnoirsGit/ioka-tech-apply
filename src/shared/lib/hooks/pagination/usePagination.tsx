import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes'

interface UsePaginationProps {
  isCyclical?: boolean;
}

const usePagination = ({ isCyclical = false }: UsePaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const findCurrentLocationIndex = () => {
    // there could be some location with key in router like 'location/:id'
    // and here add this logic to find needed locaion is very simple decomposing array and then just use find methods
    const index = ROUTES.findIndex(route => location.pathname === route.path);
    return index;
  }

  const navigateRelativeToCurrent = (num: number) => {
    const routesCount = ROUTES.length;
    const currentLocationIndex = findCurrentLocationIndex();
  
    if (isCyclical) {
      const newIndex = (currentLocationIndex + num + routesCount) % routesCount;
      navigate(ROUTES[newIndex].path);
    } else {
      const newIndex = currentLocationIndex + num;
      if (newIndex >= routesCount || newIndex < 0) return;
      else navigate(ROUTES[newIndex].path);
    }
  };

  const canNavigate = (num: number) => {
    if (isCyclical) return true;

    const routesCount = ROUTES.length;
    const currentLocationIndex = findCurrentLocationIndex();
    const newIndex = currentLocationIndex + num;

    return newIndex >= 0 && newIndex < routesCount;
  };

  const navigateBack = () => navigateRelativeToCurrent(-1);
  const navigateBackTwice = () => navigateRelativeToCurrent(-2);
  const navigateForward = () => navigateRelativeToCurrent(1);
  const navigateForwardTwice = () => navigateRelativeToCurrent(2);


  return {
    navigateRelativeToCurrent,
    navigateBack,
    navigateBackTwice,
    navigateForward,
    navigateForwardTwice,
    canNavigate
  };
};

export default usePagination;

