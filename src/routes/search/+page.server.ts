export const load = (async ({ cookies }) => {
    console.log('cookies', cookies);
    const sessionid = cookies.get('sessionid');
    return false
}) 