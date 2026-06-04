select usr.full_name, evt.title, fb.rating, fb.comments
from Feedback fb
join Users usr on fb.user_id = usr.user_id
join Events evt on fb.event_id = evt.event_id
where fb.rating < 3;