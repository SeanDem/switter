async function addFollowerAndFollowing(uid: string, otherUserUid: string) {
    const response = await fetch('/api/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid, otherUserUid }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'An error occurred while adding follower and following.');
    }
  
    return await response.json();
  }
  