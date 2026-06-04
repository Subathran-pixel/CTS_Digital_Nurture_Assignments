select evt.title, count(sess.session_id) as total_sessions
from Events evt
join Sessions sess on evt.event_id = sess.event_id
group by evt.event_id, evt.title
having count(sess.session_id) = (
    select max(session_count)
    from (
        select count(*) as session_count
        from Sessions
        group by event_id
    ) t
);