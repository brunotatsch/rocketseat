import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {
  private Specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.Specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      this.INSTANCE = new SpecificationRepository();
    }

    return this.INSTANCE;

  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.Specifications.push(specification);

  }

  list(): Specification[] {
    return this.Specifications;
  }

  findByName(name: string): Specification {

    const specification = this.Specifications.find(specification => specification.name === name);

    return specification;

  }
}

export { SpecificationRepository }