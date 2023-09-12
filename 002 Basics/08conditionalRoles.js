var user = "admin";
switch(user)
{
    case "admin":console.log("gets full access");
    break;
    case "subadmin":console.log("gets access to create and delete courses");
    break;
    case "testprep":console.log("gets access to create and delete tests");
    break;
    case "user":console.log("gets access to consume data");
    break;
    default : console.log("trail user");
}