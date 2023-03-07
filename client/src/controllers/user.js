const base = "https://talent-box-ubgj.onrender.com";

export const signup = async (obj) => {
  const res = await fetch(`${base}/api/users/signup`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};
export const auth = async (obj) => {
  const res = await fetch(`${base}/api/users/auth`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

export const login = async (obj) => {
  const res = await fetch(`${base}/api/users/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};


  //get all courses
export const get_courses = async (obj) => {
  const res = await fetch(`${base}/api/users/allcourses`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ans = await res.json();
  return ans;
};

