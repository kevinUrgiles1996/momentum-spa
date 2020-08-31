export interface Cause {
  _id ?: string;
  name: string;
  description: string;
  imageUrl: string;
  charityName: string;
  peopleLimit: number;
  reward: string;
  user ?: string;
}