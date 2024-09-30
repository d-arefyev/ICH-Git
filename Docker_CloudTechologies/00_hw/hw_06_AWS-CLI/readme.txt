Docker & cloud technologies: Домашнее задание 6 (morning)

1. При помощи aws cli создайте security group с вашем Вашим именем и Вашей группой (например --group-name 20240915-andrew-sg) и описанием ("Security Group for MySQL and HTTPS and SSH”) (скопируйте id только что созданной sg, например, sg-092d4ec2208cc14a6)

2. При помощи aws cli Добавьте правила входящего (inbound) трафика для портов 3306 (с комментарием mysql) и 443 (с комментарием https) для 0.0.0.0:  (для всех адресов) --cidr 0.0.0.0/0  

3. В в AWS Management Console (UI) - найдите свою security group и добавьте еще одно правило: порт 22 (SSH) для вашего IP-адреса
   1. В поле Type выберите SSH (порт 22 будет добавлен автоматически).
   2. В поле Source выберите опцию My IP — это автоматически подставит ваш текущий IP-адрес.
   3. Добавьте описание в поле Description (опционально, например, “SSH My IP”).
4. Пришлите результат выполнения команды (не забудьте указать id именно Вашей security group! ): 
aws ec2 describe-security-groups --group-ids sg-092d4ec2208cc14a6 --query 'SecurityGroups[*].IpPermissions' --output json]

5. Пришлите команды, использованные для создания security group и правил (из п. 1 и 2)

6. Удалите Вашу security group с inbound и outbound правилами


Решение --------------------------------------------------------------------

Прочитал:
aws ec2 describe-instances
(и забрал оттуда vpc-0516518931f9a21d0)

Шаги для выполнения задания с использованием AWS CLI
1.	Создание описания security group через AWS CLI:
aws ec2 create-security-group \
    --group-name 20240915-denis-sg \
    --description "Security Group for MySQL and HTTPS and SSH" \
    --vpc-id vpc-0516518931f9a21d0

Получил:
sg-019edb1ee83bff99d

2.	Добавление тегов к существующей Security Group (включая тег Description):
aws ec2 create-tags \
    --resources sg-019edb1ee83bff99d \
    --tags Key=Description,Value="Security Group for MySQL and HTTPS and SSH"



3.	Добавление правил для портов:
aws ec2 authorize-security-group-ingress \
    --group-id sg-019edb1ee83bff99d \
    --protocol tcp --port 3306 \
    --cidr 0.0.0.0/0
    --description "Allow MySQL access"

aws ec2 authorize-security-group-ingress \
    --group-id sg-019edb1ee83bff99d \
    --protocol tcp --port 443 \
    --cidr 0.0.0.0/0
	 --description "Allow HTTPS access"

aws ec2 authorize-security-group-ingress \
    --group-id sg-019edb1ee83bff99d \
    --protocol tcp --port 22 \
    --cidr 213.209.86.149/32

4. Запуск инстанса:
aws ec2 run-instances \
    --image-id ami-0de02246788e4a354 \
    --count 1 \
    --instance-type t2.micro \
    --key-name aws-key \
    --associate-public-ip-address \
    --security-group-ids sg-019edb1ee83bff99d \
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=20240915-denis-sg}]' \
    --region eu-central-1 \
    --user-data file:///Users/denisarefyev/Documents/ICH-GitWork/TMP/user-data.txt

5. Получил информацию о моей security group в AWS
aws ec2 describe-security-groups --group-ids sg-019edb1ee83bff99d --query 'SecurityGroups[*].IpPermissions' --output json


[
    [
        {
            "FromPort": 22,
            "IpProtocol": "tcp",
            "IpRanges": [
                {
                    "CidrIp": "213.209.86.149/32"
                }
            ],
            "Ipv6Ranges": [],
            "PrefixListIds": [],
            "ToPort": 22,
            "UserIdGroupPairs": []
        },
        {
            "FromPort": 3306,
            "IpProtocol": "tcp",
            "IpRanges": [
                {
                    "CidrIp": "0.0.0.0/0"
                }
            ],
            "Ipv6Ranges": [],
            "PrefixListIds": [],
            "ToPort": 3306,
            "UserIdGroupPairs": []
        },
        {
            "FromPort": 443,
            "IpProtocol": "tcp",
            "IpRanges": [
                {
                    "CidrIp": "0.0.0.0/0"
                }
            ],
            "Ipv6Ranges": [],
            "PrefixListIds": [],
            "ToPort": 443,
            "UserIdGroupPairs": []
        }
    ]
]

6. Удалил группу безопасности:
aws ec2 delete-security-group --group-id sg-019edb1ee83bff99d
