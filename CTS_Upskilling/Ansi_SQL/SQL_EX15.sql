select sess1.event_id, sess1.title, sess2.title
from Sessions sess1
join Sessions sess2
on sess1.event_id = sess2.event_id
and sess1.session_id < sess2.session_id
and sess1.start_time < sess2.end_time
and sess1.end_time > sess2.start_time;