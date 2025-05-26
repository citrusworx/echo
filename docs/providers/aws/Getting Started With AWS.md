# Getting Started With AWS (For Developers)

Amazon Web Services (AWS) is the leading provider — and innovator — in cloud computing. Many features of **Kiwi Engine** and **GrapeVine** are designed to integrate seamlessly with AWS to give you powerful, scalable deployment options without vendor lock-in.

Whether you're deploying a personal blog, a SaaS product, or a fully custom web app, **AWS gives you the flexibility, performance, and global reach** to do it right.

---

## ⚙️ Why AWS?

- **Free Tier Options** — Start building without worrying about your first bill. AWS provides generous free usage for services like EC2, S3, Lambda, and RDS.
- **Scalability** — Easily move from a single instance to global auto-scaling clusters as your app grows.
- **Compatibility** — Our GrapeVine library includes pre-configured CloudFormation templates for:
- EC2
- S3
- CloudFront
- RDS (PostgreSQL/MariaDB)
- Lambda Functions
- Route53

- **Security** — AWS offers robust IAM, encryption, logging, and monitoring out of the box.

---

## 🛠️ What You’ll Need

1. **An AWS Account**  
    If you don’t already have one, [sign up for free](https://aws.amazon.com/free).
2. **IAM User & Access Key**  
    For security, create an IAM user with limited permissions and generate access keys for CLI usage.
3. **Install AWS CLI**  
    You’ll need the AWS CLI installed to interact with AWS services via KiwiCLI or GrapeVine.  
    [Install AWS CLI →](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
4. **Set Up Your Environment**  
    Run:

    ```bash
    aws configure
    ```

    Enter your access key, secret, default region, and output format when prompted.

---

## 🚀 Deploying With GrapeVine

Once you're set up with AWS, GrapeVine makes it easy to deploy full-stack environments using prebuilt CloudFormation templates and deployment scripts.

### Quick Deploy Example

```bash
kiwi deploy --provider aws --template blog-app
```

This command will:

- Spin up EC2 + S3 hosting for your static or dynamic frontend
- Provision an RDS database for backend persistence
- Connect your app to a CloudFront distribution with SSL
- Optionally configure Route53 for custom domain routing

### Manual Template Deployment

Prefer manual control or need to modify the stack?

You can deploy any CloudFormation script found in:

```bash
/grapevine/aws/
```

Then run:

```bash
aws cloudformation deploy \
  --template-file grapevine/aws/blog-app.yml \
  --stack-name my-kiwi-app \
  --capabilities CAPABILITY_NAMED_IAM
```

---

## 📘 Next Steps

- [Explore AWS Template Examples →](https://docs.kiwiengine.dev/grapevine/aws-templates)
- [Full GrapeVine AWS Guide →](https://docs.kiwiengine.dev/grapevine/aws-deployment)
- [Learn how billing works with AWS](https://aws.amazon.com/pricing/)

---

💡 **Tip:** Start with AWS Lightsail if you want a simpler VPS-style deployment with flat monthly pricing.

---

AWS is powerful, flexible, and Kiwi Engine is built to take full advantage of it — **without making it overwhelming.**
