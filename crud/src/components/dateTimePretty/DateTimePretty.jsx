import moment from "moment";
import 'moment/locale/ru'
moment.locale('ru')

export function DateTimePretty({date}) {

  return (
    <p className="date">{
      moment(date).fromNow()}
    </p>
  )
}