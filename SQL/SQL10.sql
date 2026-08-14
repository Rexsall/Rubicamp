SELECT
    department_name,
    COUNT(e.id) AS total_employees,
    ROUND(AVG(e.salary), 2) AS avg_salary,
    MIN(e.salary) AS min_salary,
    MAX(e.salary) AS max_salary,
    MAX(e.salary) - MIN(e.salary) AS salary_range
FROM departments d
JOIN employees e
    ON d.id = e.department_id
GROUP BY d.id, d.department_name
ORDER BY avg_salary DESC;