select evt.title, count(sess.session_id) as session_count
from Events evt
left join Sessions sess on evt.event_id = sess.event_id
where time(sess.start_time) between '10:00:00' and '12:00:00'
group by evt.event_id, evt.title;