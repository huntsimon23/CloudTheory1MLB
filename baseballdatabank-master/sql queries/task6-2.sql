select "Salaries"."yearID","Teams".name, min("salary"), max("salary"), max("salary") - min("salary") AS "Salary_Range"
from "Salaries"
inner join "Teams" on "Salaries"."teamID" = "Teams"."teamID"
group by "Salaries"."yearID", "Teams".name
order by "Salary_Range" desc