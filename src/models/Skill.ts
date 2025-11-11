/**
 * Skill class - represents a skill or technology using OOP principles
 */
export const SkillCategory = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  DATABASE: 'Database',
  DEVOPS: 'DevOps',
  TOOLS: 'Tools',
  OTHER: 'Other'
} as const;

export type SkillCategory = typeof SkillCategory[keyof typeof SkillCategory];

export class Skill {
  private _name: string;
  private _category: SkillCategory;
  private _level: number; // 1-5 proficiency level
  private _icon?: string;

  constructor(
    name: string,
    category: SkillCategory,
    level: number,
    icon?: string
  ) {
    this._name = name;
    this._category = category;
    this._level = Math.max(1, Math.min(5, level)); // Ensure level is between 1-5
    this._icon = icon;
  }

  // Getters
  get name(): string {
    return this._name;
  }

  get category(): SkillCategory {
    return this._category;
  }

  get level(): number {
    return this._level;
  }

  get icon(): string | undefined {
    return this._icon;
  }

  // Methods
  getLevelDescription(): string {
    const levels = ['Beginner', 'Intermediate', 'Proficient', 'Advanced', 'Expert'];
    return levels[this._level - 1] || 'Unknown';
  }

  getLevelPercentage(): number {
    return (this._level / 5) * 100;
  }

  toJSON() {
    return {
      name: this._name,
      category: this._category,
      level: this._level,
      icon: this._icon
    };
  }
}

