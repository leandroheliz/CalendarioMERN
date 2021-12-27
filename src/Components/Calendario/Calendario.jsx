import NavBar from "../UI/NavBar";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import messages from '../../Helpers/messages';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
  title: 'Entrevistas',
  start: moment().toDate(),
  end: moment().add(2, 'hour').toDate(),
  bgcolor: '#fafafa'
}]

const Calendario = () => {
  return (
    <div className="calendario">
    <NavBar/>
    <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccesor="end"
    messages={messages}
    />
    </div>
  )
}

export default Calendario;