select evt.title
from Events evt
join Registrations reg on evt.event_id = reg.event_id
left join Feedback fb on evt.event_id = fb.event_id
where fb.feedback_id is null
group by evt.event_id, evt.title;