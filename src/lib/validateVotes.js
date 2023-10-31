import Member from "@/models/Member";
import Participant from "@/models/Participant";

const validateVotes = async (participant, candidate) => {
  const validMembers = await Member.find({ name: participant.name.toUpperCase() });

  if (validMembers.length === 0) throw Error("Anda Tidak Memiliki Hak Suara! Jika anda merasa memiliki hak suara tolong segera melapor ke pihak OSIS atau IPNU IPPNU");

  const validMember = validMembers.find((member) => {
    if (participant.nis === member.nis) return member;

    return false;
  });

  if (!validMember) throw Error("NIS tidak sesuai dengan Data, Jika anda merasa NIS sudah benar tolong segera melapor ke pihak OSIS atau IPNU IPPNU");

  const existingParticipant = await Participant.find({ name: participant.name.toUpperCase(), nis: participant.nis });

  if (candidate.role == "OSIS") {
    if (existingParticipant && validMember.voted.osis) throw Error("Hak Suara Anda Sudah Dipakai! Jika anda merasa belum menggunakan hak suara anda tolong segera melapor ke pihak OSIS");
  } else {
    if (existingParticipant && validMember.voted.ippnus) throw Error("Hak Suara Anda Sudah Dipakai! Jika anda merasa belum menggunakan hak suara anda tolong segera melapor ke pihak IPNU IPPNU");
  }

  if (candidate.role == "OSIS") validMember.voted.osis = true;
  if (candidate.role == "IPNU" || candidate.role == "IPPNU") validMember.voted.ippnus = true;
  await validMember.save();

  return true;
};

export default validateVotes;
