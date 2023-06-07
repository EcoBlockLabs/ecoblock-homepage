export const convertValueType = (value: number): string => {
  /**
   * Convert value based on its type
   * @param value The type of the value
   * @returns The converted string
   */
  switch (value) {
    case 0:
      return 'Introduction';
    case 1:
      return 'What is EcoBlock';
    case 2:
      return 'Why choose EcoBlock';
    case 3:
      return 'Explore EcoBlock';
    default: // If type is introduction
      return '';
  }
};
