/**
 * Project class - represents a portfolio project using OOP principles
 */
export class Project {
  private _id: string;
  private _title: string;
  private _description: string;
  private _technologies: string[];
  private _imageUrl: string;
  private _githubUrl?: string;
  private _liveUrl?: string;
  private _date: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    technologies: string[],
    imageUrl: string,
    date: Date,
    githubUrl?: string,
    liveUrl?: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._technologies = technologies;
    this._imageUrl = imageUrl;
    this._date = date;
    this._githubUrl = githubUrl;
    this._liveUrl = liveUrl;
  }

  // Getters
  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get technologies(): string[] {
    return [...this._technologies]; // Return a copy to maintain encapsulation
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get githubUrl(): string | undefined {
    return this._githubUrl;
  }

  get liveUrl(): string | undefined {
    return this._liveUrl;
  }

  get date(): Date {
    return this._date;
  }

  // Methods
  hasGithubLink(): boolean {
    return !!this._githubUrl;
  }

  hasLiveLink(): boolean {
    return !!this._liveUrl;
  }

  getFormattedDate(): string {
    return this._date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title,
      description: this._description,
      technologies: this._technologies,
      imageUrl: this._imageUrl,
      githubUrl: this._githubUrl,
      liveUrl: this._liveUrl,
      date: this._date.toISOString(),
    };
  }
}
