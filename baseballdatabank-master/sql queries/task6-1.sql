select "Salaries"."yearID", "Teams".name, sum("salary")
from "Salaries"
inner join "Teams" on "Salaries"."teamID" = "Teams"."teamID"
group by "Salaries"."yearID", "Teams".name
order by sum("salary") desc