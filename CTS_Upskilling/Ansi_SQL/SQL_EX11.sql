select registration_date, count(*) as users_count
from Users
where registration_date >= curdate() - interval 7 day
group by registration_date;