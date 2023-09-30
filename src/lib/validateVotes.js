import Member from "@/models/Member";
import Participant from "@/models/Participant";

const validateVotes = async (participant) => {
  const validMember = await Member.findOne({ name: participant });

  if (!validMember) throw Error("Anda Tidak Memiliki Hak Suara! Jika anda merasa memiliki hak suara tolong segera melapor ke pihak OSIS");

  const existingParticipant = await Participant.findOne({ name: participant });
  if (existingParticipant && validMember.voted) throw Error("Hak Suara Anda Sudah Dipakai! Jika anda merasa belum menggunakan hak suara anda tolong segera melapor ke pihak OSIS");

  validMember.voted = true;
  await validMember.save();

  return true;
};

export default validateVotes;
