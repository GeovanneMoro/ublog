import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const formatData = (timestamp = 0): string => {
  const temp = format(timestamp, 'dd MM yy', {
    locale: ptBR,
  });

  const tempArray = temp.split(' ');

  return tempArray[0] + '/' + tempArray[1] + '/' + tempArray[2];
};

export { formatData };
