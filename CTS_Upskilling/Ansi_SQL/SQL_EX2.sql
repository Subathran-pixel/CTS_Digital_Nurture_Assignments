select evt.title, avg(fb.rating) as avg_rating
from Events evt
join Feedback fb on evt.event_id = fb.event_id
group by evt.event_id, evt.title
having count(fb.feedback_id) >= 10
order by avg_rating desc;