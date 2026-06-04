select evt.title, count(sess.session_id) as session_count
from Events evt
left join Sessions sess on evt.event_id = sess.event_id
where evt.status = 'upcoming'
group by evt.event_id, evt.title;