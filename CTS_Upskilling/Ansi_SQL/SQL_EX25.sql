select evt.title
from Events evt
left join Sessions sess on evt.event_id = sess.event_id
where sess.session_id is null;