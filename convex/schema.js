import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users:defineTable({
        name:v.string(),
        tokenIdentifier:v.string(),
        email:v.string(),
        imageUrl:v.optional(v.string()),
        hasCompletedOnboarding:v.boolean(),
        location:v.optional(
            v.object({
                city:v.string(),
                state:v.optional(v.string()),
                country:v.string(),
            })
        ),
        interests:v.optional(v.array(v.string())),
        freeEventCreated:v.number(),
        createdAt:v.number(),
        updatedAt:v.number(),
  
    }).index("by_token",["tokenIdentifier"]),

    Events:defineTable({
        title:v.string(),
        description:v.string(),
        slug:v.string(),

        organizerId:v.id("users"),
        organizerName:v.string(),

        Category:v.string(),
        tags:v.array(v.string()),

        startDate:v.number(),
        endDate:v.number(),
        timezone:v.number(),

        loaction:v.union(v.literal("Online"),v.literal("Physical")),
        venue:v.optional(v.string()),
        address:v.optional(v.string()),
        city:v.string(),
        state:v.string(),
        country:v.string(),

        capacity:v.number(),
        ticketType:v.union(v.literal("Free"),v.literal("Paid")),
        ticketPrice:v.number(),
        registrationCount:v.number(),

        coverImage:v.string(),
        themeColor:v.string(),

        createdAt:v.number(),
        updatedAt:v.number(),

    })
    .index("by_organizer",["organizerId"])
    .index("by_category",["Category"])
    .index("by_start_date",["startDate"])
    .index("slug",["endDate"])
    .searchIndex("search_title",{searchField : "title" }),

    Registrations:defineTable({
        eventId:v.id("Events"),
        userId:v.id("Users"),
        status:v.union(v.literal("Confirm"),v.literal("Cancelled")),
        registeredAt:v.number(),
        attendeName:v.string(),
        attendeEmail:v.string(),
        checkedIn:v.boolean(),
        checkedInAt:v.number(),
        qrCode:v.string(),
    })
    .index("by_events",["eventId"])
    .index("by_user",["userId"])
    .index("by_event_user",["eventId","userId"])
    .index("by_qr_code",["qrCode"])

    
})