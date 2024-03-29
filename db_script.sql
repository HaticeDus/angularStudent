USE [studentInformDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 10.02.2023 14:15:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 10.02.2023 14:15:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Ad] [nvarchar](max) NULL,
	[Soyad] [nvarchar](max) NULL,
	[tel] [nvarchar](max) NULL,
	[cinsiyet] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230204132905_Initial', N'7.0.2')
GO
SET IDENTITY_INSERT [dbo].[Students] ON 

INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (6, N'Teoman', N'kartal', N'458-782-93-11', N'erkek', N'kapici11@gmail.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (7, N'Sena', N'Ekin', N'123-987-33-22', N'Kadın', N'ekin00@gmail')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (9, N'Eren', N'Ermiş', N'544-963-99-54', N'Erkek', N'ermis011@gmail.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (61, N'Ecem', N'Taş', N'566-456-89-78', N'Kadın', N'deneme01@gmail.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (64, N'Beren', N'Sucu', N'456-963-99-77', N'Kadın', N'deneme11@gmail.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (65, N'Hatice', N'Düş', N'0544-963-55-12', N'kadin', N'deneme2@gmail.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (77, N'Meral', N'Akan', N'541-632-99-00', N'kadin', N'deneme321@example.com')
INSERT [dbo].[Students] ([Id], [Ad], [Soyad], [tel], [cinsiyet], [Email]) VALUES (78, N'Sinan', N'Dolunay2', N'456-987-32-37', N'erkek', N'dolunay1@example.com')
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
