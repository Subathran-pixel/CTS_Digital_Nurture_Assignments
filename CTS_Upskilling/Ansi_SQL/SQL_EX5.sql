select usr.city, count(distinct reg.user_id) as registrations
from Users usr
join Registrations reg on usr.user_id = reg.user_id
group by usr.city
order by registrations desc
limit 5;