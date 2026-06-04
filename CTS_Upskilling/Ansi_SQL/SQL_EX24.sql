select evt.title,
       avg(timestampdiff(minute, sess.start_time, sess.end_time)) as avg_duration_minutes
from Events evt
join Sessions sess on evt.event_id = sess.event_id
group by evt.event_id, evt.title;