select year(registration_date) as year,
       month(registration_date) as month,
       count(*) as registrations
from Registrations
where registration_date >= curdate() - interval 12 month
group by year(registration_date), month(registration_date)
order by year, month;