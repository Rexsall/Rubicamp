SELECT 
    d.department_name
    d.budget
    COUNT(e.id) AS employee_count
FROM departments d
LEFT JOIN employees e
    ON d.id = e.department_id
GROUP BY
    d.id, 
    d.depament_name,
    d.budget;