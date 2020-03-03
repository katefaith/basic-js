module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let dreamTeam = '';
    
    members.forEach(member => {
      if (typeof member === "string") {
        member = member.trim();
        dreamTeam += member[0];
      }
    });
    return dreamTeam.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
}