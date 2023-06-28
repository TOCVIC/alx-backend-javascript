export default function createIteratorObject(report) {
	const employees = Object.values(report.dept).flatMap((dept) => dept.employeeList);
	let index = 0;
  
	return {
	  next() {
		if (index < employees.length) {
		  const employeeList = employees[index];
		  index++;
		  return {
			value: employeeList,
			done: false,
		  };
		} else {
		  return {
			done: true,
		  };
		}
	  },
	  [Symbol.iterator]() {
		return this;
	  },
	};
  }
  