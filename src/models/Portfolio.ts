/**
 * Portfolio är en OOP-klass som samlar all portföljdata: namn, titel, bio, projekt, färdigheter och kontaktinfo.
  Konstruktorn initierar fälten (projekt och skills har tomma listor som standard).
  Getters exponerar värden; projekt och skills returneras som kopior (immutabilitet).
  Projekthantering: addProject, removeProject(id), getProjectById, getRecentProjects(count) sorterar efter datum (senaste först).
  Färdighetshantering: addSkill, removeSkill(namn), getSkillsByCategory(kategori).
  Nyttometoder: getTotalProjects och getTotalSkills.
  toJSON serialiserar hela objektet och mappar Project/Skill via deras toJSON samt inkluderar ContactInfo.toJSON
 */
import { Project } from "./Project";
import { Skill } from "./Skill";
import { ContactInfo } from "./ContactInfo";

export class Portfolio {
  private _name: string;
  private _title: string;
  private _bio: string;
  private _projects: Project[];
  private _skills: Skill[];
  private _contactInfo: ContactInfo;

  constructor(
    name: string,
    title: string,
    bio: string,
    projects: Project[] = [],
    skills: Skill[] = [],
    contactInfo: ContactInfo
  ) {
    this._name = name;
    this._title = title;
    this._bio = bio;
    this._projects = projects;
    this._skills = skills;
    this._contactInfo = contactInfo;
  }

  // Getters
  get name(): string {
    return this._name;
  }

  get title(): string {
    return this._title;
  }

  get bio(): string {
    return this._bio;
  }

  get projects(): Project[] {
    return [...this._projects];
  }

  get skills(): Skill[] {
    return [...this._skills];
  }

  get contactInfo(): ContactInfo {
    return this._contactInfo;
  }

  // Methods for managing projects
  addProject(project: Project): void {
    this._projects.push(project);
  }

  removeProject(projectId: string): void {
    this._projects = this._projects.filter((p) => p.id !== projectId);
  }

  getProjectById(projectId: string): Project | undefined {
    return this._projects.find((p) => p.id === projectId);
  }

  getRecentProjects(count: number = 3): Project[] {
    return [...this._projects]
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, count);
  }

  // Methods for managing skills
  addSkill(skill: Skill): void {
    this._skills.push(skill);
  }

  removeSkill(skillName: string): void {
    this._skills = this._skills.filter((s) => s.name !== skillName);
  }

  getSkillsByCategory(category: string): Skill[] {
    return this._skills.filter((s) => s.category === category);
  }

  // Utility methods
  getTotalProjects(): number {
    return this._projects.length;
  }

  getTotalSkills(): number {
    return this._skills.length;
  }

  toJSON() {
    return {
      name: this._name,
      title: this._title,
      bio: this._bio,
      projects: this._projects.map((p) => p.toJSON()),
      skills: this._skills.map((s) => s.toJSON()),
      contactInfo: this._contactInfo.toJSON(),
    };
  }
}
