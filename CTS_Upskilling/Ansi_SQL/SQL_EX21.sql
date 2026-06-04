select user_tbl.full_name,
       count(distinct reg_tbl.event_id) as events_attended,
       count(distinct feed_tbl.feedback_id) as feedbacks_submitted
from Users user_tbl
left join Registrations reg_tbl on user_tbl.user_id = reg_tbl.user_id
left join Feedback feed_tbl on user_tbl.user_id = feed_tbl.user_id
group by user_tbl.user_id, user_tbl.full_name;