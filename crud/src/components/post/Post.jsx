import "./post.css"
import moment from "moment";
import 'moment/locale/ru'
import {DateTimePretty} from "../dateTimePretty/DateTimePretty";
moment.locale('ru')

export function Post({props}) {
const { name="Женя", content, created } = props;

  return (
    <div className="post" >
      <div> Имя: {name}</div>
      <div >
        <p> {content} </p>
        <DateTimePretty date={created} />
      </div>
    </div>
  )
}