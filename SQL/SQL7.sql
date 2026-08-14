--jawaban
INSERT INTO departments VALUES (5, 'Research', NULL, 100000.00);

SELECT 
    d.department_name
    d.budget
    COUNT(e.id) AS employee_count
FROM departments d
LEFT JOIN employees e
    ON d.id = e.department_id
GROUP BY
    d.id, 
   