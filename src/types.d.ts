type Ttask = {
  name: string;
  id: number;
  content: string;
  isSelected: boolean;
  subtasks: false | Array<Ttask>;
};
