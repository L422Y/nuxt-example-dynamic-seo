const houseCleaning = {
  category: 'cleaning',
  slug: 'house',
  title: 'House Cleaning',
  content: 'This is your content for house cleaning',
};

const laundry = {
  category: 'cleaning',
  slug: 'laundry',
  title: 'Laundry Services',
  content: 'This is your content for laundry services',
};

const autoRepair = {
  category: 'automobile',
  slug: 'repair',
  title: 'Auto Repair',
  content: 'This is your auto repair content',
};

const autoCleaning = {
  category: 'automobile',
  slug: 'cleaning',
  title: 'Auto Cleaning',
  content: 'This is your auto cleaning content',
};

const SEOList = [houseCleaning, laundry, autoRepair, autoCleaning];

export default function () {
  return SEOList;
}
