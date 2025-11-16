/**
 * ContactInfo är en klass som kapslar in kontaktuppgifter med OOP.
  Har privata fält: email (obligatorisk), github, linkedin, twitter, phone (valfria).
  Konstruktorn sätter värdena.
  Getters för att läsa respektive fält.
  Hjälpmetoder hasGithub/hasLinkedin/hasTwitter/hasPhone returnerar om värden finns.
  getSocialLinks bygger en lista av tillgängliga sociala länkar med namn och URL.
  toJSON serialiserar objektet till ett enkelt JSON-vänligt objekt.
 */
export class ContactInfo {
  private _email: string;
  private _github?: string;
  private _linkedin?: string;
  private _twitter?: string;
  private _phone?: string;

  constructor(
    email: string,
    github?: string,
    linkedin?: string,
    twitter?: string,
    phone?: string
  ) {
    this._email = email;
    this._github = github;
    this._linkedin = linkedin;
    this._twitter = twitter;
    this._phone = phone;
  }

  // Getters
  get email(): string {
    return this._email;
  }

  get github(): string | undefined {
    return this._github;
  }

  get linkedin(): string | undefined {
    return this._linkedin;
  }

  get twitter(): string | undefined {
    return this._twitter;
  }

  get phone(): string | undefined {
    return this._phone;
  }

  // Methods
  hasGithub(): boolean {
    return !!this._github;
  }

  hasLinkedin(): boolean {
    return !!this._linkedin;
  }

  hasTwitter(): boolean {
    return !!this._twitter;
  }

  hasPhone(): boolean {
    return !!this._phone;
  }

  getSocialLinks(): Array<{ name: string; url: string }> {
    const links: Array<{ name: string; url: string }> = [];

    if (this._github) {
      links.push({ name: "GitHub", url: this._github });
    }
    if (this._linkedin) {
      links.push({ name: "LinkedIn", url: this._linkedin });
    }
    if (this._twitter) {
      links.push({ name: "Twitter", url: this._twitter });
    }

    return links;
  }

  // Serialiserar till JSON. Användbart för lagring eller nätverksöverföring.
  toJSON() {
    return {
      email: this._email,
      github: this._github,
      linkedin: this._linkedin,
      twitter: this._twitter,
      phone: this._phone,
    };
  }
}
